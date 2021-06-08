const textSymbol = Symbol('text');
const typeSymbol = Symbol('type');

class Description {
  /**
   * Create a `Description` instance.
   *
   * @param {string} text
   * @param {string} [type=inline]
   */
  constructor(text, type = 'inline') {
    this.text = text;
    this.type = type;
  }

  /**
   * The description text.
   *
   * @return {string}
   */
  get text() {
    return this[textSymbol];
  }

  /**
   * Set the description text.
   *
   * @param {string|number|boolean|null|undefined} text
   */
  set text(text) {
    if (typeof text === 'object') {
      throw new TypeError('Description text is invalid');
    } else if ((!text && (text !== 0)) || (`${text}`.trim() === '')) {
      throw new TypeError('Description text cannot be empty');
    }

    this[textSymbol] = `${text}`.trim();
  }

  /**
   * The description type.
   *
   * @return {string} "inline" or "multiline"
   */
  get type() {
    return this[typeSymbol];
  }

  /**
   * Set the description type.
   *
   * @param {string} type
   */
  set type(type) {
    if (typeof type !== 'string') {
      throw new TypeError('Description type must be a string');
    } else if (!['inline', 'multiline'].includes(type)) {
      throw new RangeError('Description type must be one of; "inline", "multiline"');
    }

    this[typeSymbol] = type;
  }

  /**
   * Return an object for JSON serialising.
   *
   * This is called automatically when JSON encoding the object.
   *
   * @return {{text: string, type: string}}
   */
  toJSON() {
    const { text, type } = this;

    return {
      text,
      type,
    };
  }
}

export default Description;
