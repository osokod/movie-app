"use client";
import { MovieDataType } from "@/app/data";
import { Box, Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import BookCardsCard from "./BookCardsCard";

export default function BookCards() {
  const [book, setBooks] = useState<MovieDataType[]>([]);
  useEffect(() => {
    const localData = localStorage.getItem("myData");
    const parsedData = JSON.parse(localData ? localData : "[]");
    if (parsedData.length > 0) {
      setBooks(parsedData);
    }
  }, []);
  return (
    <Box pl={4} ml={2} maxWidth={"1152px"}>
      <Grid container spacing={4} columns={16}>
        {book.map((bk: any) => (
          <Grid
            sx={{ p: 3, backgroundColor: "transparent" }}
            size={{ xs: 16, sm: 7, md: 5, lg: 4, xl: 3 }}
            key={bk.id}
          >
            <BookCardsCard items={bk} book={book} setBooks={setBooks} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

// function useState<T>(arg0: never[]): [any, any] {
//     throw new Error('Function not implemented.');
// }

// function useEffect(arg0: () => void, arg1: never[]) {
//     throw new Error('Function not implemented.');
// }
