import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import styles from "./LikeButton.module.css";

import React, { useState } from "react";
import Button from "../Button";

interface Props {
  active: boolean;
  onClick: () => void;
}

const LikeButton = () => {
    const[active, setActive] = useState(false);
    if (active) {
        return (
            <div>
                <FaHeart color="red" size={20} OnClick={() => setActive(false)}/>
            </div>
        );
    }else {
        return (
            <div>
                <CiHeart size={20} />
            </div>
        );
    }
};

export default LikeButton;
