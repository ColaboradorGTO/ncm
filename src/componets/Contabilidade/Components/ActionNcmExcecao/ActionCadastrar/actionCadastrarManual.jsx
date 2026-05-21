import { Fragment } from "react";
import Modal from 'react-bootstrap/Modal';
import { HeaderModal } from "../../../../Modais/HeaderModal/HeaderModal";
import { FormularioCadastrar } from "./formularioCadastrar";

export const ActionCadastrarNCMModal = ({ show, handleClose, refetchNcmExcecao }) => {

  return (
    <Fragment>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <HeaderModal
          title={"Cadastro de NCM Exceção"}
          subTitle={"cadastrar NCM Exceção"}
          handleClose={handleClose}
        />

        <Modal.Body>

          <FormularioCadastrar 
            handleClose={handleClose}
            refetchNcmExcecao={refetchNcmExcecao}
          />
        </Modal.Body>

      </Modal>
    </Fragment>
  )
}