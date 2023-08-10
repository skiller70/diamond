import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainCart from "../components/MainCart";
import { useDispatch } from "react-redux";
import ShoppingCard from "../components/ShoppingCard";
import DrawerCart from "../components/DrawerCart";
import ShopOurInstagram from "../components/ShopOurInstagram";
import CollectionFilter from "../components/CollectionFilter";
import CollectionMetal from "../components/CollectionMetal";
import SlideImage from "../components/SlideImage";

function Home() {
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      <div className=" my-32 ">
        {/* <MainCart />
        <DrawerCart /> */}

        <div className=" bg-green-100 py-10">
          <SlideImage
            title="Dazzle and Delight"
            text="Our captivating diamond bands make the most incredible wedding rings. They are also a popular choice for meaningful milestone anniversary gifts. Whether you’re looking for a shimmery wedding ring or want to amaze your beloved with an incredible sparkly ring for your upcoming anniversary, you’ll find what you’re looking for in our dazzling collection of five-stone, seven-stone, nine-stone, and eternity rings."
            slide={[
              { img: "/Eternity.png", imgTitle: "gggggggg" },
              { img: "/Five.jpg", imgTitle: "gggggggg" },
              { img: "/Nine.jpg", imgTitle: "gggggggg" },
              { img: "/Seven.jpg", imgTitle: "gggggggg" },
            ]}
          />
        </div>
        <h1 className=" my-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          reprehenderit vel asperiores, voluptate sunt cumque, mollitia ea
          voluptates culpa quos nemo quaerat nisi, necessitatibus temporibus
          rerum esse tempora iure consequuntur!
        </h1>

        <div className=" grid-cols-1 md:grid-cols-3 grid gap-y-8 gap-x-8 my-10 px-8">
          <ShoppingCard
            id="003"
            title="0.30 Carat Radiant Yellow Diamond"
            price="$333.00"
            detail="Very Good | FPY | SI2"
            img="/diamond.jpg"
          />

          <ShoppingCard
            id="003"
            title="0.30 Carat Radiant Yellow Diamond"
            price="$333.00"
            detail="Very Good | FPY | SI2"
            img="/diamond.jpg"
          />

          <ShoppingCard
            id="002"
            title="0.18 Carat Round Diamond"
            price="$204.00"
            detail="Ideal | J | SI1"
            img="/diamond.jpg"
          />
          <ShoppingCard
            id="001"
            title="0.40 Carat Cushion Diamond"
            price="$207.00"
            detail="Ideal | K | IF"
            img="/diamond.jpg"
          />
        </div>

        <div className=" bg-green-100 py-10">
          <SlideImage
            title="Create Lasting Memories That Sparkle."
            text="For anniversaries, wedding presents, birthdays, graduation gifts, and so much more, we have meaningful, breathtaking diamond jewelry gifts for all of life’s precious milestones. And they're not just for gifts either—you can also treat yourself to some well-deserved sparkle!"
            slide={[
              { img: "/Fashion_Jewelry.jpeg", imgTitle: "gggggggg" },
              { img: "/Diamond_Pendant.jpeg", imgTitle: "gggggggg" },
              { img: "/Diamond_Earrings.jpeg", imgTitle: "gggggggg" },
              { img: "/Curved_Jewelry.jpeg", imgTitle: "gggggggg" },
              { img: "/Design_Your_Own.jpeg", imgTitle: "gggggggg" },
              { img: "/Diamond_Tennis_Bracelet.jpeg", imgTitle: "gggggggg" },
            ]}
          />
        </div>
        {/* <button onClick={()=>{
            dispatch({type:"isOpenCartMenu",payload:true})
        }}>open</button>   */}
        <h1 className=" my-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          reprehenderit vel asperiores, voluptate sunt cumque, mollitia ea
          voluptates culpa quos nemo quaerat nisi, necessitatibus temporibus
          rerum esse tempora iure consequuntur!
        </h1>
        <h1 className=" my-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          reprehenderit vel asperiores, voluptate sunt cumque, mollitia ea
          voluptates culpa quos nemo quaerat nisi, necessitatibus temporibus
          rerum esse tempora iure consequuntur!
        </h1>
        <h1 className=" my-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          reprehenderit vel asperiores, voluptate sunt cumque, mollitia ea
          voluptates culpa quos nemo quaerat nisi, necessitatibus temporibus
          rerum esse tempora iure consequuntur!
        </h1>
        <h1 className=" my-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          reprehenderit vel asperiores, voluptate sunt cumque, mollitia ea
          voluptates culpa quos nemo quaerat nisi, necessitatibus temporibus
          rerum esse tempora iure consequuntur!
        </h1>
        <h1 className=" my-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          reprehenderit vel asperiores, voluptate sunt cumque, mollitia ea
          voluptates culpa quos nemo quaerat nisi, necessitatibus temporibus
          rerum esse tempora iure consequuntur!
        </h1>
      </div>

      <div className=" bg-green-100 py-10">
        <SlideImage
          title="Why We're Different"
          text="We continually strive to help you find the perfect diamond for your budget. The markups on all our diamonds are transparent, and with our market analysis tool, we guarantee that our best-value diamonds have the fairest prices on the market. Price match guarantee!"
          slide={[
            {
              img: "/Eliminate_FOMO.jpg",
              imgTitle: "Eliminate FOMO",
              imgText:
                "Tired of filtering through diamonds? Think you missed the one? Chat with a commission-free gemologist",
            },
            {
              img: "/No_Surprises_Her.jpg",
              imgTitle: "Keep the Secret!",
              imgText:
                "Pick up your order from one of our hundreds of partner jewelers or at a WeWork near you for added peace of mind.",
            },

            {
              img: "/No_Surprises_Here.jpg",
              imgTitle: "No Surprises Here",
              imgText:
                "Get the inside scoop on how our diamond inventory works. We break down what you can expect while shopping online.",
            },
            {
              img: "/Seeing_is_believin.jpg",
              imgTitle: "Seeing Is Believing",
              imgText:
                "We’re in it for you. Our goal is to make sure we have the best pricing. We put our diamond cost right in front of you and a best-value badge on our lowest-priced diamonds.",
            },
            {
              img: "/Breaking_Stereoty.jpg",
              imgTitle: "Breaking Stereotypes",
              imgText:
                "We’re in it for you. Our goal is to make sure we have the best pricing. We put our diamond cost right in front of you and a best value badge on our lowest priced diamonds.",
            },
          ]}
        />
      </div>

      <div>
        <ShopOurInstagram />

        <Footer />
      </div>

      <div className=" w-[40%] mx-16">
        <CollectionFilter />
      </div>
      <div className=" w-[40%] ">
        <CollectionMetal />
      </div>
    </div>
  );
}

export default Home;
