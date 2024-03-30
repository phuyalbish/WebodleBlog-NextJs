"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";
import styles from "./assets/css/Goback.module.css";

function GoBack() {
  const Router = useRouter();
  return (
    <IoMdArrowRoundBack
      className={styles.linktoback}
      onClick={() => Router.back()}
    />
  );
}

export default GoBack;
