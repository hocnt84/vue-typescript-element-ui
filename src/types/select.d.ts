import { ElementUIComponent, ElementUIComponentSize } from './component'

export interface QueryChangeHandler {
  /**
   * @param queryString Current value of the text input
   */
  (queryString: string): void
}

/** Dropdown Select Component */
export declare class ElSelect extends ElementUIComponent {
  /** The form input value */
  value: any

  /** Whether multiple-select is activated */
  multiple: boolean

  /** Whether Select is disabled */
  disabled: boolean

  /** Size of Input */
  size: ElementUIComponentSize

  /** Whether single select can be cleared */
  clearable: boolean

  /** Maximum number of options user can select when multiple is true. No limit when set to 0 */
  multipleLimit: number

  /** The name attribute of select input */
  name: string

  /** Placeholder */
  placeholder: string

  /** Whether Select is filterable */
  filterable: boolean

  /** Whether creating new items is allowed. To use this, filterable must be true */
  allowCreate: boolean

  /** Custom filter method */
  // filterMethod: AlterItemsEventHandler

  /** Whether options are loaded from server */
  remote: boolean

  /** Custom remote search method */
  // remoteMethod: AlterItemsEventHandler

  /** Whether Select is loading data from server */
  loading: boolean

  /** Displayed text while loading data from server */
  loadingText: string

  /** Displayed text when no data matches the filtering query */
  noMatchText: string

  /** Displayed text when there is no options */
  noDataText: string

  /** Custom class name for Select's dropdown */
  popperClass: string
}
