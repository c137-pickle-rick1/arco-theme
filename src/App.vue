<script lang="ts">
import { ref } from 'vue'
import { IconPlus, IconDelete, IconExclamationCircleFill } from '@arco-design/web-vue/es/icon'

export default {
    components: { IconPlus, IconDelete, IconExclamationCircleFill },
    setup() {
        const data = Array(8).fill(undefined).map((_, index) => ({
            value: `option${index + 1}`,
            label: `Option ${index + 1}`
        }))
        const value = ['option1', 'option3', 'option5']


        const visible = ref(false)

        const handleClick = () => {
            visible.value = true
        }
        const handleOk = () => {
            visible.value = false
        }
        const handleCancel = () => {
            visible.value = false
        }
        const options = [
            {
                value: 'beijing',
                label: 'Beijing',
                children: [
                    {
                        value: 'chaoyang',
                        label: 'ChaoYang',
                        children: [
                            {
                                value: 'datunli',
                                label: 'Datunli',
                            },
                        ],
                    },
                    {
                        value: 'haidian',
                        label: 'Haidian',
                    },
                    {
                        value: 'dongcheng',
                        label: 'Dongcheng',
                    },
                    {
                        value: 'xicheng',
                        label: 'Xicheng',
                        children: [
                            {
                                value: 'jinrongjie',
                                label: 'Jinrongjie',
                            },
                            {
                                value: 'tianqiao',
                                label: 'Tianqiao',
                            },
                        ],
                    },
                ],
            },
            {
                value: 'shanghai',
                label: 'Shanghai',
                children: [
                    {
                        value: 'huangpu',
                        label: 'Huangpu',
                    },
                ],
            },
        ]

        return {
            data,
            value,

            visible,
            handleClick,
            handleOk,
            handleCancel,

            options
        }
    }
}
</script>

<template>
    <a-space direction="vertical" style="margin: 20px;" size="large">

        <a-divider orientation="center">按钮</a-divider>
        <a-space align="start" direction="vertical" size="medium">
            <a-space align="start">
                <a-button type="primary" size="mini">Button</a-button>
                <a-button type="primary" size="small">Button</a-button>
                <a-button type="primary" size="medium">Button</a-button>
                <a-button type="primary" size="large">Button</a-button>
                <a-button type="primary" size="mini">
                    <template #icon>
                        <icon-plus />
                    </template>
                </a-button>
                <a-button type="primary" size="small">
                    <template #icon>
                        <icon-plus />
                    </template>
                </a-button>
                <a-button type="primary" size="medium">
                    <template #icon>
                        <icon-plus />
                    </template>
                </a-button>
                <a-button type="primary" size="large">
                    <template #icon>
                        <icon-plus />
                    </template>
                </a-button>
            </a-space>
            <a-space align="start">
                <a-button type="secondary" size="mini">Button</a-button>
                <a-button type="secondary" size="small">Button</a-button>
                <a-button type="secondary" size="medium">Button</a-button>
                <a-button type="secondary" size="large">Button</a-button>
                <a-button type="secondary" size="mini">
                    <template #icon>
                        <icon-plus />
                    </template>
                </a-button>
                <a-button size="small">
                    <template #icon>
                        <icon-plus />
                    </template>
                </a-button>
                <a-button size="medium">
                    <template #icon>
                        <icon-plus />
                    </template>
                </a-button>
                <a-button size="large">
                    <template #icon>
                        <icon-plus />
                    </template>
                </a-button>
            </a-space>
            <a-space align="start">
                <a-button type="dashed" size="mini">Button</a-button>
                <a-button type="dashed" size="small">Button</a-button>
                <a-button type="dashed" size="medium">Button</a-button>
                <a-button type="dashed" size="large">Button</a-button>
                <a-button type="dashed" size="mini">
                    <template #icon>
                        <icon-plus />
                    </template>
                </a-button>
                <a-button type="dashed" size="small">
                    <template #icon>
                        <icon-plus />
                    </template>
                </a-button>
                <a-button type="dashed" size="medium">
                    <template #icon>
                        <icon-plus />
                    </template>
                </a-button>
                <a-button type="dashed" size="large">
                    <template #icon>
                        <icon-plus />
                    </template>
                </a-button>
            </a-space>
            <a-space align="start">
                <a-button type="outline" size="mini">Button</a-button>
                <a-button type="outline" size="small">Button</a-button>
                <a-button type="outline" size="medium">Button</a-button>
                <a-button type="outline" size="large">Button</a-button>
                <a-button type="outline" size="mini">
                    <template #icon>
                        <icon-plus />
                    </template>
                </a-button>
                <a-button type="outline" size="small">
                    <template #icon>
                        <icon-plus />
                    </template>
                </a-button>
                <a-button type="outline" size="medium">
                    <template #icon>
                        <icon-plus />
                    </template>
                </a-button>
                <a-button type="outline" size="large">
                    <template #icon>
                        <icon-plus />
                    </template>
                </a-button>
            </a-space>
            <a-space align="start">
                <a-button type="text" size="mini">Button</a-button>
                <a-button type="text" size="small">Button</a-button>
                <a-button type="text" size="medium">Button</a-button>
                <a-button type="text" size="large">Button</a-button>
                <a-button type="text" size="mini">
                    <template #icon>
                        <icon-plus />
                    </template>
                </a-button>
                <a-button type="text" size="small">
                    <template #icon>
                        <icon-plus />
                    </template>
                </a-button>
                <a-button type="text" size="medium">
                    <template #icon>
                        <icon-plus />
                    </template>
                </a-button>
                <a-button type="text" size="large">
                    <template #icon>
                        <icon-plus />
                    </template>
                </a-button>
            </a-space>
        </a-space>

        <a-divider orientation="center">输入</a-divider>
        <a-space direction="vertical">
            <a-typography-title :heading="6">Auto Complete</a-typography-title>
            <a-space align="start">
                <a-auto-complete placeholder="placeholder" :style="{ width: '182px' }" size="mini" />
                <a-auto-complete placeholder="placeholder" :style="{ width: '182px' }" size="small" />
                <a-auto-complete placeholder="placeholder" :style="{ width: '182px' }" size="medium" />
                <a-auto-complete placeholder="placeholder" :style="{ width: '182px' }" size="large" />
            </a-space>
            <a-typography-title :heading="6">Cascader</a-typography-title>
            <a-space align="start">
                <a-cascader :options="options" :style="{ width: '182px' }" placeholder="Please select ..." />
                <a-cascader :options="options" default-value="datunli" expand-trigger="hover"
                    :style="{ width: '182px' }" placeholder="Please select ..." />
            </a-space>
            <a-typography-title :heading="6">Checkbox</a-typography-title>
            <a-space align="start">
                <a-checkbox value="1">Option 1</a-checkbox>
            </a-space>
            <a-typography-title :heading="6">ColorPicker</a-typography-title>
            <a-space align="start">
                <a-color-picker defaultValue="#165DFF" size="mini" />
                <a-color-picker defaultValue="#165DFF" size="small" />
                <a-color-picker defaultValue="#165DFF" size="medium" />
                <a-color-picker defaultValue="#165DFF" size="large" />
            </a-space>
            <a-typography-title :heading="6">DatePicker</a-typography-title>
            <a-space align="start">
                <a-date-picker style="width: 182px;" />
            </a-space>
            <a-typography-title :heading="6">Input</a-typography-title>
            <a-space align="start">
                <a-input placeholder="placeholder" :style="{ width: '182px' }" allow-clear size="mini" />
                <a-input placeholder="placeholder" :style="{ width: '182px' }" allow-clear size="small" />
                <a-input placeholder="placeholder" :style="{ width: '182px' }" allow-clear size="medium" />
                <a-input placeholder="placeholder" :style="{ width: '182px' }" allow-clear size="large" />
            </a-space>
            <a-typography-title :heading="6">TagInput</a-typography-title>
            <a-space align="start">
                <a-input-tag :default-value="['test']" :style="{ width: '182px' }" placeholder="Please Enter"
                    allow-clear />
            </a-space>
            <a-typography-title :heading="6">Select</a-typography-title>
            <a-space direction="vertical">
                <a-select :style="{ width: '182px' }" placeholder="Please select ...">
                    <a-option>Beijing</a-option>
                    <a-option>Shanghai</a-option>
                    <a-option>Guangzhou</a-option>
                    <a-option disabled>Disabled</a-option>
                </a-select>
            </a-space>
            <a-typography-title :heading="6">Textarea</a-typography-title>
            <a-space align="start">
                <a-textarea placeholder="Please enter something" allow-clear />
            </a-space>
            <a-typography-title :heading="6">TimePicker</a-typography-title>
            <a-space align="start">
                <a-time-picker style="width: 194px;" />
            </a-space>
            <a-typography-title :heading="6">Transfer</a-typography-title>
            <a-space align="start">
                <a-transfer :data="data" :default-value="value" />
            </a-space>
        </a-space>

        <a-divider orientation="center">反馈</a-divider>
        <a-space direction="vertical">
            <a-typography-title :heading="6">Alert</a-typography-title>
            <a-space align="start">
                <a-row :gutter="[40, 20]">
                    <a-col :span="12">
                        <a-alert>This is an info alert.</a-alert>
                    </a-col>
                    <a-col :span="12">
                        <a-alert type="success">This is an success alert.</a-alert>
                    </a-col>
                    <a-col :span="12">
                        <a-alert type="warning">This is an warning alert.</a-alert>
                    </a-col>
                    <a-col :span="12">
                        <a-alert type="error">This is an error alert.</a-alert>
                    </a-col>
                    <a-col :span="12">
                        <a-alert type="normal">
                            <template #icon>
                                <icon-exclamation-circle-fill />
                            </template>
                            This is an normal alert.
                        </a-alert>
                    </a-col>
                </a-row>
            </a-space>

            <a-typography-title :heading="6">Message</a-typography-title>
            <a-space align="start">
                <a-button @click="() => $message.info('This is an info message!')">Info Message</a-button>
                <a-button @click="() => $message.success('This is a success message!')" status="success">Success
                    Message
                </a-button>
                <a-button @click="() => $message.warning('This is a warning message!')" status="warning">Warning
                    Message
                </a-button>
                <a-button @click="() => $message.error('This is an error message!')" status="danger">Error
                    Message</a-button>
            </a-space>
            <a-space>
                <a-button @click="() => $message.normal('This is a normal message!')">Normal Message</a-button>
                <a-button @click="() => $message.loading('This is a loading message!')" status="primary">Loading
                    Message
                </a-button>
            </a-space>

            <a-typography-title :heading="6">Modal</a-typography-title>
            <a-button @click="handleClick">Open Modal</a-button>
            <a-modal v-model:visible="visible" @ok="handleOk" @cancel="handleCancel">
                <template #title>
                    Title
                </template>
                <div>You can customize modal body text by the current situation. This modal will be closed immediately
                    once you
                    press the OK button.</div>
            </a-modal>


            <a-typography-title :heading="6">Notification</a-typography-title>
            <a-space align="start">
                <a-button type='primary' @click="() => $notification.info('This is an info message!')">
                    Info
                </a-button>
                <a-button type='primary' status="success"
                    @click="() => $notification.success('This is a success message!')">
                    Success
                </a-button>
                <a-button type='primary' status="warning"
                    @click="() => $notification.warning('This is a warning message!')">
                    Warning
                </a-button>
                <a-button type='primary' status="danger"
                    @click="() => $notification.error('This is an error message!')">
                    Error
                </a-button>
                <a-button type='secondary' @click="() => $notification.info({
                    content: 'This is an error message!',
                    showIcon: false
                })">
                    Normal
                </a-button>
            </a-space>
        </a-space>

        <a-divider orientation="center">导航</a-divider>
        <a-space direction="vertical">
            <a-typography-title :heading="6">Dropdown</a-typography-title>
            <a-space align="start">
                <a-dropdown>
                    <a-button>Click Me</a-button>
                    <template #content>
                        <a-doption>Option 1</a-doption>
                        <a-doption disabled>Option 2</a-doption>
                        <a-doption :value="{ value: 'Option3' }">Option 3</a-doption>
                    </template>
                </a-dropdown>
                <a-dropdown disabled>
                    <a-button disabled>Click Me</a-button>
                    <template #content>
                        <a-doption>Option 1</a-doption>
                        <a-doption disabled>Option 2</a-doption>
                        <a-doption>Option 3</a-doption>
                    </template>
                </a-dropdown>
                <a-dropdown :popup-max-height="false">
                    <a-button>No Max Height <icon-down /></a-button>
                    <template #content>
                        <a-doption>Option 1</a-doption>
                        <a-doption disabled>Option 2</a-doption>
                        <a-doption>Option 3</a-doption>
                        <a-doption>Option 4</a-doption>
                        <a-doption>Option 5</a-doption>
                        <a-doption>Option 6</a-doption>
                        <a-doption>Option 7</a-doption>
                        <a-doption>Option 8</a-doption>
                        <a-doption>Option 9</a-doption>
                    </template>
                </a-dropdown>
            </a-space>

            <a-typography-title :heading="6">Pagination</a-typography-title>
            <a-space align="start">
                <a-pagination :total="50" />
            </a-space>

            <a-typography-title :heading="6">Skeleton</a-typography-title>
            <a-skeleton>
                <a-space direction="vertical" :style="{ width: '100%' }" size="large">
                    <a-skeleton-line :rows="3" />
                    <a-skeleton-shape />
                </a-space>
            </a-skeleton>
        </a-space>
    </a-space>
</template>