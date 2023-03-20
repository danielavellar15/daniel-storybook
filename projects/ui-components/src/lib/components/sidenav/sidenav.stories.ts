import { Story, Meta } from '@storybook/angular/types-6-0';
import { SidenavComponent } from './sidenav.component';

export default {
  title: 'Doc/Sidenav',
  component: SidenavComponent,
  argTypes: {
  },
} as Meta;

const Template: Story<SidenavComponent> = (args: SidenavComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
};

