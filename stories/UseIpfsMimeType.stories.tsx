import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ShowCase, Props } from '../src/example';

const meta: Meta = {
  title: 'useIpfsMimeType',
  component: ShowCase,
  argTypes: {
    hash: {
      control: {
        type: 'text',
      },
      description: 'Hash of your ipfs file, pass it like  <br />`QmNhq4hx1KfTw1a5pTtudGXm9Q4xhWdeuWtPSSG19SSZeU` or `ipfs://QmNhq4hx1KfTw1a5pTtudGXm9Q4xhWdeuWtPSSG19SSZeU`',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => <ShowCase {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Hash = Template.bind({});
Hash.parameters = {
  docs: {
    source: {
      code: 'const { error, type } = useIpfsMimeType(hash);',
      language: 'jsx',
      type: 'auto',
    },
  },
};
Hash.args = {
  hash: 'QmNhq4hx1KfTw1a5pTtudGXm9Q4xhWdeuWtPSSG19SSZeU',
};

export const IpfsUrl = Template.bind({});
IpfsUrl.args = {
  hash: 'ipfs://QmNhq4hx1KfTw1a5pTtudGXm9Q4xhWdeuWtPSSG19SSZeU',
};

export const InvalidHash = Template.bind({});
InvalidHash.args = {
  hash: 'ipfs://invalid',
};
