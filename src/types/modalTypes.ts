import { AllOrNothing } from './helpers'

export type ModalOptions = {
  /**
   * If true, the modal will have a cancel button. If false or not provided, the modal will not have a cancel button.
   *
   * When enabled, you will get new props for the cancel button.
   * */
  hasCancelButton?: boolean

  /**
   * If true, the modal will have a confirm button. If false or not provided, the modal will not have a confirm button.
   *
   * When enabled, you will get new props for the confirm button.
   * */
  hasConfirmButton?: boolean
}

export type CancelType = {
  /**
   * An optional text for the cancel button. If not provided, a default text is used.
   */
  cancelText: string

  /**
   * An optional style class for the cancel button inside of the modal.
   * If not provided, a default style class is used.
   */
  cancelButtonStyle?: string
}

export type ConfirmType = {
  /**
   * An optional text for the confirm button. If not provided, a default text is used.
   */
  confirmText: string

  /**
   * An optional style class for the confirm button inside of the modal.
   * If not provided, a default style class is used.
   * */
  confirmButtonStyle?: string
}

type BaseModalProps = {
  /**
   * If true, the modal will have a cancel button. If false or not provided, the modal will not have a cancel button.
   *
   * When enabled, you will get new props for the cancel button.
   * */
  hasCancelButton?: boolean

  /**
   * If true, the modal will have a confirm button. If false or not provided, the modal will not have a confirm button.
   *
   * When enabled, you will get new props for the confirm button.
   * */
  hasConfirmButton?: boolean
  /**
   * An optional title for the modal. This can be used to provide a brief
   * description or context about the content of the modal.
   */
  title?: string

  /**
   * The content to be rendered within the modal. It can include anything
   * that is renderable in a React component such as text, forms, elements, other components, etc.
   */
  children: React.ReactNode

  /**
   * A function that will be called when the close button or cancel button is clicked.
   * Typically, this function will set the state controlling the modal's visibility to false,
   * effectively "closing" the modal.
   */
  close: () => void

  /**
   * A function that will be called when the confirm button is clicked. This function
   * is typically used for handling form submission, saving changes, or performing
   * other tasks in response to the user confirming their intent.
   */
  handleSubmit: () => void

  /**
   * An optional boolean indicating whether the modal is currently visible or not. If true,
   * the modal is displayed; if false or not provided, the modal is not displayed.
   */
  open?: boolean

  /**
   * An optional style class for the modal's footer.
   * If not provided, a default style class is used.
   * */
  footerStyles?: string
}

export type ModalProps<T extends ModalOptions> = BaseModalProps &
  T &
  (T['hasCancelButton'] extends true ? AllOrNothing<CancelType> : {}) &
  (T['hasConfirmButton'] extends true ? AllOrNothing<ConfirmType> : {})
