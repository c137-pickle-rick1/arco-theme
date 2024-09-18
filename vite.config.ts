import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    /*********** border ***********/
                    "border-radius-none": "0",
                    "border-radius-small": "2px",
                    "border-radius-medium": "4px",
                    "border-radius-large": "8px",
                    "border-radius-circle": "50%",
                    
                    /*********** btn ***********/
                    "btn-size-mini-radius": "4px",
                    "btn-size-small-radius": "4px",
                    "btn-size-default-radius": "6px",
                    "btn-size-large-radius": "8px",
                    
                    /*********** Input ***********/
                    "input-border-radius": "6px", // 输入框不同尺寸无法分别设置圆角
                    "tag-border-radius": "4px",
                    "picker-input-border-radius": "6px",

                    /*********** select ***********/
                    "select-popup-border-radius": "6px",
                    // "select-popup-option-border-radius": "4px", // 无效
                    
                    /*********** transfer ***********/
                    "transfer-border-radius": "6px",

                    /*********** alert ***********/
                    "alert-border-radius": "6px",

                    /*********** message ***********/
                    "message-border-radius": "6px",

                    /*********** modal ***********/
                    "modal-border-radius": "6px",

                    /*********** notification ***********/
                    "notification-border-radius": "6px",

                    /*********** dropdown ***********/
                    "dropdown-border-radius": "6px",

                    /*********** pagination ***********/
                    "pagination-item-border-radius": "6px",

                    /*********** skeleton ***********/
                    "skeleton-radius-image-border": "4px",
                },
                javascriptEnabled: true,
            },
        },
    },
})
