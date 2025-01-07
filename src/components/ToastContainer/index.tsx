import React from "react";
import { useTransition } from "react-spring";

import Toast from "./Toast";
import { ToastMessage } from '../../hooks/toast'
import { Container } from "./styled";

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({messages}) => {
  const messagesWithTransitions = useTransition(
    messages,
    {
      keys: (message: ToastMessage) => message.id,
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    }
  );

  return(
    <Container>
      {messagesWithTransitions(( style, item ) => (
        <Toast key={item.id} style={style} message={item}/>
      ))}
    </Container>
  )
};

export default ToastContainer
