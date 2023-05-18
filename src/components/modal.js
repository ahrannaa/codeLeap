import Modal from "react-modal";

export default function ModalComponents(){
  return(
    <Modal
    style={{
      overlay: {
        backgroundColor: 'rgba(0, 0 ,0, 0.8)'
      }, content: {
         width: "500px",
         height: "262px",
         background: " #8a5755",
         borderRadius: "50px",
         top: "50%",
         left: "50%",
         right: "auto",
         bottom: "auto",
         marginRight: "-50%",
         transform: "translate(-50%, -50%)",
      }
    }}
    />
  )
}