"use client";

import { VectorMap } from "@south-paw/react-vector-maps";
import classes from "./VectorMap.module.scss";
import TurkeyMap from "./constants/Turkey.json";

export default function VectorMaps() {
  return (
    <div className={classes["map-container"]}>
      <VectorMap {...TurkeyMap} />
    </div>
  );
}
