
'use client'
import React, { useState, useEffect } from "react";
import PostWriter from "../../components/PostWriter";
import DetailPost from "../../components/DetailPost";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from './PostDetails.module.css'
import Router from 'next/router'

const  PostDetails = ( {params}: {params:{ id:string}}) => {


const id = parseInt(params.id);

  return (
    
    <section className={styles.postDetail}>
      <div className={styles.postDetailContainer}>
        <div className={styles.titleWithBack}>
            {/* <IoMdArrowRoundBack className="linktoback" onClick={() => Router.back()} /> */}
            
          <div className="title">
            <PostWriter userId={3} />
          </div>
        </div>

        <div className={styles.postDetailHeader}>
          
            <DetailPost id={id} />
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
          deleniti quasi omnis unde nulla quae expedita ducimus veniam, illo
          earum ipsam facere rem repellat aliquid similique illum, saepe beatae.
          Omnis doloremque placeat adipisci et distinctio eveniet? Praesentium
          omnis cupiditate repellat, accusamus ad natus perferendis quidem
          perspiciatis quasi harum aut amet.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
          cupiditate modi aut nisi tempore sequi vero non cum alias, velit eius
          vel assumenda odio eligendi aspernatur cumque quasi eveniet
          temporibus, quia explicabo atque voluptates est minus. Adipisci, non
          facilis odio ea quos aliquid omnis. Molestiae vitae error libero
          itaque animi sunt nulla vero deserunt nesciunt. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Eius deleniti quasi omnis unde
          nulla quae expedita ducimus veniam, illo earum ipsam facere rem
          repellat aliquid similique illum, saepe beatae. Omnis doloremque
          placeat adipisci et distinctio eveniet? Praesentium omnis cupiditate
          repellat, accusamus ad natus perferendis quidem perspiciatis quasi
          harum aut amet.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
          cupiditate modi aut nisi tempore sequi vero non cum alias, velit eius
          vel assumenda odio eligendi aspernatur cumque quasi eveniet
          temporibus, quia explicabo atque voluptates est minus. Adipisci, non
          facilis odio ea quos aliquid omnis. Molestiae vitae error libero
          itaque animi sunt nulla vero deserunt nesciunt.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
          deleniti quasi omnis unde nulla quae expedita ducimus veniam, illo
          earum ipsam facere rem repellat aliquid similique illum, saepe beatae.
          Omnis doloremque placeat adipisci et distinctio eveniet? Praesentium
          omnis cupiditate repellat, accusamus ad natus perferendis quidem
          perspiciatis quasi harum aut amet.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
          cupiditate modi aut nisi tempore sequi vero non cum alias, velit eius
          vel assumenda odio eligendi aspernatur cumque quasi eveniet
          temporibus, quia explicabo atque voluptates est minus. Adipisci, non
          facilis odio ea quos aliquid omnis. Molestiae vitae error libero
          itaque animi sunt nulla vero deserunt nesciunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          obcaecati id doloribus eligendi voluptatibus quisquam eveniet ullam
          aliquam ipsam quaerat error saepe delectus excepturi voluptatum amet
          quae quod doloremque porro, natus placeat reprehenderit. Consectetur
          quo sunt nisi facere obcaecati, nam magni dolorem sequi iure
          laudantium magnam consequuntur aspernatur quod sint numquam id fugit
          expedita alias sed unde libero molestiae ipsum nihil vero. Voluptas,
          perspiciatis illo ad accusantium repudiandae nemo exercitationem cum
          soluta quidem est beatae pariatur necessitatibus! Corporis, rem quo
          debitis illo nesciunt voluptatibus laudantium sed porro, esse delectus
          velit recusandae? Laborum recusandae ab reprehenderit repudiandae?
          Quaerat, debitis! Laborum, maxime?
        </p>
        <p>
          In conclusion, Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Qui sed, perferendis sequi reprehenderit accusantium saepe quis
          eos provident nulla amet odit explicabo dolorum, in aliquam cum
          consectetur. Minima, explicabo repellat.
        </p>
      </div>
    </section>

    
  )
}

export default PostDetails




  
