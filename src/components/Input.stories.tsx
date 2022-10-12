import { Meta, StoryObj } from '@storybook/react' 
import { TextInput, TextInputRootProps } from './Input' 
import { Envelope } from 'phosphor-react'
export default {
    title: 'Components/Input',
    component: TextInput.Root,
    args: {
        children: (
            <>
                <TextInput.Icon>
                    <Envelope />
                </TextInput.Icon>
                <TextInput.Input placeholder='Type your e-mail address' />
            </>
        )
    },
    argTypes: {
        children: {
            table: { disable: true }
        }
    }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {
    
}