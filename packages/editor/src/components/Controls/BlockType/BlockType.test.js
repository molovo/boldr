/* @flow */

import React from 'react';
import { mount } from 'enzyme';
import { EditorState, convertFromHTML, ContentState } from 'draft-js';
import ModalHandler from '../../../core/eventHandlers/modals';
import defaultToolbar from '../../../core/config';

import BlockType from './BlockType';

describe('BlockType test suite', () => {
  const contentBlocks = convertFromHTML('<div>test</div>');
  const contentState = ContentState.createFromBlockArray(contentBlocks);
  const editorState = EditorState.createWithContent(contentState);

  it('should have a div at root when rendered', () => {
    expect(
      mount(
        <BlockType
          onChange={() => {}}
          editorState={editorState}
          config={{ ...defaultToolbar.blockType, inDropdown: false }}
          modalHandler={new ModalHandler()}
        />,
      )
        .html()
        .startsWith('<div'),
    ).toBe(true);
  });

  it('should have 8 child elements when inDropdown is false', () => {
    const block = mount(
      <BlockType
        onChange={() => {}}
        editorState={editorState}
        config={{ ...defaultToolbar.blockType, inDropdown: false }}
        modalHandler={new ModalHandler()}
      />,
    );
    expect(block.find('Option').length).toEqual(6);
  });
});
