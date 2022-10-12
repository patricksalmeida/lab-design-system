import { Meta, StoryObj } from '@storybook/react' 
import { Heading, HeadingProps } from './Heading' 

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Heading'
    },
    argTypes: {
        size: {
            control: { type: 'inline-radio' },
            options: ['sm', 'md', 'lg']
        }
    }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {
    args: {
        size: 'md'
    }
}

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}

export const Custom: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Heading with H1</h1>
        )
    },
    argTypes: {
        children: {
            table: { disable: true }
        },
        asChild: {
            table: { disable: true }
        },
    }
}