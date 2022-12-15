import type { NextApiRequest, NextApiResponse } from "next";

type CaseStudiesData = {
  imageUrl?: string;
  description?: string;
  title?: string;
};

type Data = {
  successful: boolean;
  httpStatus: number;
  errors: string;
  data: CaseStudiesData;
};

export const getCaseStudies = async (): Promise<Data> => {
  try {
    const url = process.env.NEXT_PUBLIC_CASE_STUDIES_URL;
    const response = await fetch(`${url}`, {
      method: "GET",
    });

    if (!response.ok) {
      const error = await response.text();
      return {
        successful: false,
        httpStatus: response.status,
        errors: error,
        data: {},
      };
    }

    const data = await response.json();

    return {
      successful: true,
      httpStatus: response.status,
      errors: "",
      data,
    };

    console.log(data);
  } catch (err) {
    return {
      successful: false,
      httpStatus: 500,
      errors: "Unknown error has occured!",
      data: {},
    };
  }
};
