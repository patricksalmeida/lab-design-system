import { Meta, StoryObj } from '@storybook/react' 
import { Text, TextProps } from './Text' 

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Text'
    },
    argTypes: {
        size: {
            control: { type: 'inline-radio' },
            options: ['sm', 'md', 'lg']
        }
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {
    args: {
        size: 'md'
    }
}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const Custom: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Hello!</h1>
        )
    },
    argTypes: {
        children: {
            table: { disable: true }
        }
    }
}