import React, { useEffect, useRef } from "react";
import M from "../Markdown";

const Spoiler = ({ title, 
    block1, block2, block3, block4, block5, block6, block7, block8, block9, block10,
    block11, block12, block13, block14, block15, block16, block17, block18, block19, block20,
    block21, block22, block23, block24, block25, block26, block27, block28, block29, block30,
    block31, block32, block33, block34, block35, block36, block37, block38, block39, block40,
    block41, block42, block43, block44, block45, block46, block47, block48, block49, block50
  }) => {

  const collRef = useRef([])

  useEffect(() => {
    const coll = collRef.current;
    coll.forEach((element) => {
      if (element) {
        element.addEventListener("click", toggleContent);
      }
    }
  )

  return () => {
      coll.forEach((element) => {
        if (element) {
          element.removeEventListener("click", toggleContent)
        }
      })
    }
  }, [])

  const toggleContent = (event) => {
    const content = event.target.nextElementSibling
    event.target.classList.toggle("activeSpoiler")
    if (content.style.maxHeight) {
      content.style.maxHeight = null
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  return (
    <div>
      <button class="spoilerButton" ref={(el) => (collRef.current.push(el))}>
        &nbsp;&nbsp;
        <span class="spoilerText"></span>
        {title}
        &nbsp;&nbsp;
      </button>
      <div class="spoilerContentWrapper">
        <div class="spoilerContent">
          <M text={block1}/>
          <M text={block2}/>
          <M text={block3}/>
          <M text={block4}/>
          <M text={block5}/>
          <M text={block6}/>
          <M text={block7}/>
          <M text={block8}/>
          <M text={block9}/>
          <M text={block10}/>
          <M text={block11}/>
          <M text={block12}/>
          <M text={block13}/>
          <M text={block14}/>
          <M text={block15}/>
          <M text={block16}/>
          <M text={block17}/>
          <M text={block18}/>
          <M text={block19}/>
          <M text={block20}/>
          <M text={block21}/>
          <M text={block22}/>
          <M text={block23}/>
          <M text={block24}/>
          <M text={block25}/>
          <M text={block26}/>
          <M text={block27}/>
          <M text={block28}/>
          <M text={block29}/>
          <M text={block30}/>
          <M text={block31}/>
          <M text={block32}/>
          <M text={block33}/>
          <M text={block34}/>
          <M text={block35}/>
          <M text={block36}/>
          <M text={block37}/>
          <M text={block38}/>
          <M text={block39}/>
          <M text={block40}/>
          <M text={block41}/>
          <M text={block42}/>
          <M text={block43}/>
          <M text={block44}/>
          <M text={block45}/>
          <M text={block46}/>
          <M text={block47}/>
          <M text={block48}/>
          <M text={block49}/>
          <M text={block50}/>
        </div>
      </div>
    </div>
  )
};
export default Spoiler;
