import { confirmAlert } from "react-confirm-alert";

export function ExcluirAlbum() {
  confirmAlert(optionsExcluirAlbum)
  
  function msg() {
    confirmAlert()
  }
  return (
    <div className='container'>
      <button onClick={() => { msg() }}>Confirm dialog</button>
    </div>
  )
}

export const optionsExcluirAlbum = {
  title: 'Excluir',
  message: 'Confirma a exclusão do album?',
  buttons: [
    {
      label: 'Sim',
      onClick: () => alert('Click Yes')
    },
    {
      label: 'Não',
      onClick: () => alert('Click No')
    }
  ],
  closeOnEscape: true,
  closeOnClickOutside: true,
  keyCodeForClose: [8, 32],
  willUnmount: () => { },
  afterClose: () => { },
  onClickOutside: () => { },
  onKeypress: () => { },
  onKeypressEscape: () => { },
  overlayClassName: "overlay-custom-class-name"
};

export const optionsExcluirFaixa = {
  title: 'Excluir',
  message: 'Confirma a exclusão da faixa?',
  buttons: [
    {
      label: 'Sim',
      onClick: () => alert('Click Yes')
    },
    {
      label: 'Não',
      onClick: () => alert('Click No')
    }
  ],
  closeOnEscape: true,
  closeOnClickOutside: true,
  keyCodeForClose: [8, 32],
  willUnmount: () => { },
  afterClose: () => { },
  onClickOutside: () => { },
  onKeypress: () => { },
  onKeypressEscape: () => { },
  overlayClassName: "overlay-custom-class-name"
};