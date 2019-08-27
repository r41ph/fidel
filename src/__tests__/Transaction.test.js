import React from "react";
import Transactions from "../components/Transactions/Transactions";
import fetchTransaction from "../utils/fetchTransactions";

import { shallow, mount } from "enzyme";
import mockAxios from "axios";

describe("Transactions component", () => {
  it("renders", () => {
    const wrapper = shallow(<Transactions />);
    expect(wrapper).toBeTruthy();
  });

  it("starts with a loading", () => {
    const wrapper = mount(<Transactions />);
    const transaction = wrapper.find("Loading");
    expect(transaction.length).toEqual(1);
    // console.log("wrapper", wrapper.debug());
  });

  it("mounts the Transaction component", async () => {
    const transaction = [
      {
        currency: "GBP",
        programId: "2314f371-39b1-4c80-8040-4144ff1bad09",
        id: "5f68d602-664a-493f-89d4-901a053077cb",
        accountId: "d346d574-d5c2-4a0e-8e02-ffd713fd1a8d",
        created: "2017-06-16T17:15:25.866Z",
        updated: "2017-06-16T17:15:25.866Z",
        amount: 48.77943451477946,
        cleared: true,
        wallet: null,
        datetime: "Wed Sep 27 2017 01:00:00 GMT+0100 (WEST)",
        card: {
          id: "61a401b5-5d92-402f-8d86-89dfa15b515b",
          lastNumbers: "4009",
          scheme: "visa"
        },
        location: {
          address: "Google Street 4",
          city: "Angular4",
          countryCode: "GBR",
          id: "3690099c-1970-4f96-891e-11f991ccce71",
          geolocation: null,
          postcode: "NG-4",
          timezone: null,
          metadata: null
        },
        brand: {
          id: "073f6cda-1846-42df-845a-2a28e9be10f9",
          name: null,
          logoURL: null,
          metadata: null
        },
        identifiers: {
          MID: "770055002234",
          mastercardTransactionSequenceNumber: null,
          mastercardRefNumber: null,
          amexApprovalCode: null,
          visaAuthCode: null
        }
      }
    ];
    const wrapper = mount(<Transactions />);
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(transaction));

    const trans = await fetchTransaction();
    wrapper.setState({ transactions: trans, isLoading: false }, () => {
      wrapper.update();
    });

    // expect(trans).toEqual(transaction);
    // expect(mockAxios.get).toHaveBeenCalled();

    console.log("wrapper", wrapper.debug());
  });
});
