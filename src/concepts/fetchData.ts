import { z } from "zod";

const url = "https://www.course-api.com/react-tours-project";

const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
  something: z.number(),
});

// type Tour = {
//   id: string;
//   name: string;
//   info: string;
//   image: string;
//   price: string;
//   something: boolean;
// };

type Tour = z.infer<typeof tourSchema>;

const fetchData = async (url: string): Promise<Tour[]> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status:${response.status}`);
    }
    const rawData: Tour[] = await response.json();

    const result = tourSchema.array().safeParse(rawData);
    if (!result.success) {
      throw new Error(`Invalid data ${result.error}`);
    }

    return result.data;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "there was an error";
    console.log(errorMessage);
    return [];
  }
};

// const tourse = await fetchData(url);

// tourse.map((tour: Tour) => {
//   console.log(tour);
// });

//Declaration file
//In typescript .d.ts files, also known as declaration files.
//consist of type definitions, and are used to provide types for javascript code
//Allow to understand the shape and types of objects, functions, classes, etc.
