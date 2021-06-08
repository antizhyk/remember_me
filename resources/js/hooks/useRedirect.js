import React, {useEffect} from "react"
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearRedirect} from "../redux/Redirect/actions";

export default function UseRedirect() {
  const history = useHistory()
  const redirect = useSelector(({Redirect}) => Redirect.to)
  const dispatch = useDispatch()
  const searchParams = new URLSearchParams(history.location.search);
  const url = searchParams.get("redirect")
console.log('redirect')
  useEffect(() => {
    if (redirect) {
      history.push(url || redirect)
    }

    dispatch(clearRedirect())
  }, [redirect, dispatch, history, url])

  return <></>;
}
