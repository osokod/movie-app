"use client";
import { Box, Grid2 } from "@mui/material";
import Card from "./Card";
import Grid from "@mui/material/Grid2";
import { MovieDataType } from "@/app/data";
import { useState, useEffect } from "react";

export default function Results({ results }: { results: any[] }) {
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
        {results.map((result) => (
          <Grid
            sx={{ p: 3, backgroundColor: "transparent" }}
            size={{ xs: 16, sm: 7, md: 5, lg: 4, xl: 3 }}
            key={result.id}
          >
            <Card result={result} book={book} setBooks={setBooks} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
