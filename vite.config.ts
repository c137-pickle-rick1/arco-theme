import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    /*
                    这里的变量用于覆盖 Arco Design 的默认变量
                    无法使用变量覆盖的样式，通过修改全局类的样式来覆盖，见./theme.less
                    */

                    
                    /*********** btn ***********/

                    "btn-size-mini-radius": "4px",
                    "btn-size-small-radius": "4px",
                    "btn-size-default-radius": "6px",
                    "btn-size-large-radius": "8px",

                    "btn-secondary-color-text": "var(--color-text-1)",
                    "btn-secondary-color-bg": "transparent",
                    "btn-secondary-color-border": "var(--color-border-3)",

                    "btn-dashed-color-text": "var(--color-text-1)",
                    "btn-dashed-color-bg": "transparent",
                    "btn-dashed-color-border": "var(--color-border-3)",

                    
                    /*********** Input ***********/
                    
                    "input-color-bg": "transparent",
                    "input-color-border": "var(--color-border-3)",
                    "input-border-radius": "6px",
                    "tag-border-radius": "4px",
                    "picker-input-border-radius": "6px",

                    
                    /*********** select ***********/
                    
                    "select-popup-border-radius": "6px",

                    
                    /*********** picker ***********/
                    
                    "picker-color-bg": "transparent",
                    "picker-color-border": "var(--color-border-3)",

                    
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
