import type { Meta, StoryObj } from '@storybook/react';

import { Test } from './Test';

const meta: Meta<typeof Test> = {
  component: Test,
};

export default meta;
type Story = StoryObj<typeof Test>;

export const Primary: Story = {
  // render: () => <Test />,
  args: {
    label: '버튼 테스트',
  },
};
