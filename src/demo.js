import * as React from "react";
import Button from "@mui/material/Button";
import {sagaMiddleware} from './store';
import rootSaga from './saga'
import { useSelector, useDispatch } from "react-redux";
import SnackbarCustom from "./Snackbar";
sagaMiddleware.run(rootSaga)   

export default function SimpleSnackbar() {
  const selector = useSelector((state) => state);
  console.log("selctorr", selector);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: "START_CALL_API"
    })
  }
const handleClose = () => {
  console.log("aaaaaaaaaaa");
  dispatch({
    type: "HIDESNACKBAR"
  });
};

  return (
    <div>
      <Button onClick={handleClick}>CallApi</Button>
      {
        <SnackbarCustom
          open={selector.open}
          message={selector.data.message}
          handleClose = {handleClose}
          variant = {selector.data.variant}
        />
      }
      {selector.dataApi && Array.isArray(selector.dataApi) &&
      selector.dataApi.length > 0 &&
      selector.dataApi.map((ele,index) => {
        return <div key = {index}>{ele.username}</div>
      }) }
    </div>
  );
}
