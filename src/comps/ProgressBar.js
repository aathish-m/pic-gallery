import React from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile}) => {
      const { url, progress} = useStorage(file);
       console.log(progress, url);
    return (
        <div className="progess-bar" style={{width: progress + '%'}}>progress</div>
    )
}
export default ProgressBar;