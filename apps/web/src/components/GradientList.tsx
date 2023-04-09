import React from "preact/compat";
import {getGradients} from "@gradienttips/gradienttips";
import {s_imploder} from "dfts-helper";

export function GradientList() {
  const gradients = getGradients();

  return (
    <div className="flex flex-wrap gap-4">
      {gradients.map((gradient) => <div className="rounded-md" style={{width: '15rem', height: '15rem', background: `linear-gradient(to right, ${s_imploder(gradient.colors).separator(', ').build()})`}}>
        {gradient.name}
      </div>)}
    </div>
  )
}