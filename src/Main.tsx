import React, {useEffect} from 'react';

type Props = {
  numbers?: number[],
  fun?: () => void,
  obj?: object,
  num?: number,
  str?: string,
}

export default function Main(
  {
    numbers = [],
    fun = () => undefined,
    obj = {},
    str = '',
    num = 0,
  }: Props
) {

  useEffect(() => {
    console.log('### useEffect triggered by "numbers" change')
  }, [numbers])

  useEffect(() => {
    console.log('### useEffect triggered by "function" change')
  }, [fun])

  useEffect(() => {
    console.log('### useEffect triggered by "object" change')
  }, [obj])

  useEffect(() => {
    console.log('### useEffect triggered by "string" change')
  }, [str])

  useEffect(() => {
    console.log('### useEffect triggered by "number" change')
  }, [num])

  return <div>Main</div>
};
