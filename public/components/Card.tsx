"use client";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { MovieDataType } from "@/app/data";

export default function Card({
  result,
  book,
  setBooks,
}: {
  result: any;
  book: any;
  setBooks: any;
}) {
  function handleAddbook(
    id: string,
    title: string,
    image: string,
    date: number,
    likes: number,
    description: string
  ) {
    if (book.length === 0) {
      const nb = {
        id: id,
        title: title,
        image: image,
        date: date,
        likes: likes,
        description: description,
        isliked: true,
      };
      // console.log("nb:", nb);
      setBooks((b: any) => [...b, nb]);
    }

    const idx = book.findIndex((item: any) => item.id === id);

    if (book.length > 0) {
      if (idx !== -1) {
        setBooks((b: any) => b.filter((item: any) => item.id !== id));
      } else {
        const nb = {
          id: id,
          title: title,
          image: image,
          date: date,
          likes: likes,
          description: description,
          isliked: true,
        };
        setBooks((b: any) => [...b, nb]);
      }
      // book.map((item: any) => {
      //   if (item.id === id) {
      //     setBooks((b: any) => b.filter((item: any) => item.id !== id));
      //     console.log(book);
      //     let string = JSON.stringify(book);
      //     localStorage.setItem("myData", string);
      //   } else {
      //     const nb = {
      //       id: id,
      //       title: title,
      //       image: image,
      //       date: date,
      //       likes: likes,
      //       description: description,
      //       isliked: true,
      //     };
      //     setBooks((b: any) => [...b, nb]);
      //     console.log(book);
      //     let string = JSON.stringify(book);
      //     localStorage.setItem("myData", string);
      //   }
      // });

      // console.log(book);
      // let string = JSON.stringify(book);
      // localStorage.setItem("myData", string);
    }

    if (book.length === 1) {
      if (idx !== -1) {
        setBooks((b: any) => b.filter((item: any) => item.id !== id));
        let string = JSON.stringify([]);
        localStorage.setItem("myData", string);
      }
    }
  }

  useEffect(() => {
    if (book.length !== 0) {
      let string = JSON.stringify(book);
      localStorage.setItem("myData", string);
      console.log(book.length);
    }

    // console.log(`${result.title}`, book);
    // console.log(`${result.title}`, book.length);
  }, [book]);
  return (
    <Box
      sx={{
        "&:hover": { opacity: 0.8 },
      }}
      className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200"
    >
      <Link href={`/movie/${result.id}`}>
        <Image
          style={{ borderRadius: "8px", border: "1px solid #fff" }}
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={250}
          height={250}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
          alt={""}
        ></Image>
      </Link>
      <Box className="p-2">
        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
          }}
        >
          {result.overview}
        </Typography>
        <h2 className="text-lg font-bold truncate">
          {result.title || result.name}
        </h2>
        <Typography className="flex items-center">
          {result.release_date || result.first_air_date}
          <IconButton
            onClick={() =>
              handleAddbook(
                result.id,
                result.title,
                result.backdrop_path || result.poster_path,
                result.release_date,
                result.vote_count,
                result.overview
              )
            }
            key={result.id}
            sx={{ mr: 1, ml: 3, height: 5 }}
          >
            {book.findIndex((item: any) => item.id === result.id) !== -1 ? (
              <FavoriteIcon />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
          </IconButton>
          {result.vote_count}
        </Typography>
      </Box>
    </Box>
  );
}
