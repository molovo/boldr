export default {
  options: [
    'inline',
    'blockType',
    'fontSize',
    'fontFamily',
    'list',
    'textAlign',
    'colorPicker',
    'link',
    'embedded',
    'emoji',
    'image',
    'remove',
    'history',
  ],
  fontSize: {
    options: [12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
    className: undefined,
    dropdownClassName: undefined,
    title: 'Font Size',
  },
  fontFamily: {
    options: ['Roboto', 'Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
    className: undefined,
    dropdownClassName: undefined,
    title: 'Font Family',
  },
  list: {
    className: undefined,
    unordered: { className: undefined, title: 'Unordered' },
    ordered: { className: undefined, title: 'Ordered' },
    indent: { className: undefined, title: 'Indent' },
    outdent: { className: undefined, title: 'Outdent' },
    title: 'List',
  },
  link: {
    className: undefined,
    modalClassName: undefined,
    dropdownClassName: undefined,
    showOpenOptionOnHover: true,
    defaultTargetOption: '_self',
    options: ['link', 'unlink'],
    link: { className: undefined, title: 'Link' },
    unlink: { className: undefined, title: 'Unlink' },
  },
  embedded: {
    className: undefined,
    modalClassName: undefined,
    defaultSize: {
      height: 'auto',
      width: 'auto',
    },
    title: 'Embedded',
  },
  image: {
    className: undefined,
    modalClassName: undefined,
    urlEnabled: true,
    uploadEnabled: true,
    alignmentEnabled: true,
    uploadCallback: undefined,
    inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
    defaultSize: {
      height: 'auto',
      width: 'auto',
    },
    title: 'Image',
  },
  remove: {
    className: undefined,
    title: 'Remove',
  },
  history: {
    className: undefined,
    undo: {
      className: undefined,
      title: 'Undo',
    },
    redo: {
      className: undefined,
      title: 'Redo',
    },
    title: 'History',
  },
  colorPicker: {
    className: undefined,
    modalClassName: undefined,
    colors: [
      'rgb(97,189,109)',
      'rgb(26,188,156)',
      'rgb(84,172,210)',
      'rgb(44,130,201)',
      'rgb(147,101,184)',
      'rgb(71,85,119)',
      'rgb(204,204,204)',
      'rgb(65,168,95)',
      'rgb(0,168,133)',
      'rgb(61,142,185)',
      'rgb(41,105,176)',
      'rgb(85,57,130)',
      'rgb(40,50,78)',
      'rgb(0,0,0)',
      'rgb(247,218,100)',
      'rgb(251,160,38)',
      'rgb(235,107,86)',
      'rgb(226,80,65)',
      'rgb(163,143,132)',
      'rgb(239,239,239)',
      'rgb(255,255,255)',
      'rgb(250,197,28)',
      'rgb(243,121,52)',
      'rgb(209,72,65)',
      'rgb(184,49,47)',
      'rgb(124,112,107)',
      'rgb(209,213,216)',
    ],
    title: 'Color Picker',
  },
  emoji: {
    className: undefined,
    modalClassName: undefined,
    emojis: [
      '😀',
      '😁',
      '😂',
      '😃',
      '😉',
      '😋',
      '😎',
      '😍',
      '😗',
      '🤗',
      '🤔',
      '😣',
      '😫',
      '😴',
      '😌',
      '🤓',
      '😛',
      '😜',
      '😠',
      '😇',
      '😷',
      '😈',
      '👻',
      '😺',
      '😸',
      '😹',
      '😻',
      '😼',
      '😽',
      '🙀',
      '🙈',
      '🙉',
      '🙊',
      '👼',
      '👮',
      '🕵',
      '💂',
      '👳',
      '🎅',
      '👸',
      '👰',
      '👲',
      '🙍',
      '🙇',
      '🚶',
      '🏃',
      '💃',
      '⛷',
      '🏂',
      '🏌',
      '🏄',
      '🚣',
      '🏊',
      '⛹',
      '🏋',
      '🚴',
      '👫',
      '💪',
      '👈',
      '👉',
      '👉',
      '👆',
      '🖕',
      '👇',
      '🖖',
      '🤘',
      '🖐',
      '👌',
      '👍',
      '👎',
      '✊',
      '👊',
      '👏',
      '🙌',
      '🙏',
      '🐵',
      '🐶',
      '🐇',
      '🐥',
      '🐸',
      '🐌',
      '🐛',
      '🐜',
      '🐝',
      '🍉',
      '🍄',
      '🍔',
      '🍤',
      '🍨',
      '🍪',
      '🎂',
      '🍰',
      '🍾',
      '🍷',
      '🍸',
      '🍺',
      '🌍',
      '🚑',
      '⏰',
      '🌙',
      '🌝',
      '🌞',
      '⭐',
      '🌟',
      '🌠',
      '🌨',
      '🌩',
      '⛄',
      '🔥',
      '🎄',
      '🎈',
      '🎉',
      '🎊',
      '🎁',
      '🎗',
      '🏀',
      '🏈',
      '🎲',
      '🔇',
      '🔈',
      '📣',
      '🔔',
      '🎵',
      '🎷',
      '💰',
      '🖊',
      '📅',
      '✅',
      '❎',
      '💯',
    ],
    title: 'Emoji',
  },
};
