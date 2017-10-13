<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>markdown</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        
        <markdown-editor v-model="content" :configs="configs" ref="markdownEditor"></markdown-editor>
        
    </div>
</template>

<script>
    import { markdownEditor } from 'vue-simplemde';
    export default {
        data () {
            return {
                content:'',
                configs: {
                    status: true,
                    initialValue: 'Hello markdown',
                    renderingConfig: {
                        codeSyntaxHighlighting: true,
                        highlightingTheme: 'atom-one-light'
                    }
                }
            }
        },
        components: {
            markdownEditor
        }
    }
</script>
<style>
  @import '~simplemde/dist/simplemde.min.css';
  @import '~github-markdown-css';
</style>
