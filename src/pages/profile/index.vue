<template>
    <div class="profile">
        <div class="profile_head">
            <h2>My profile</h2>
            <p>This Information will be displayed publicly so be careful what you share.</p>
        </div>
        <div class="profile_img">
            <h3>Profile picture</h3>
            <div class="profile_img-upload">
                <div class="avatar">
                    <a-avatar :size="78">
                        <template #icon>
                            <UserOutlined />
                        </template>
                    </a-avatar>
                    <p>
                        You Can upload jpg, gif or png image files, Max size of 3mb
                    </p>
                </div>
                <div class="upload-btn">
                    <a-button>Upload</a-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { UserOutlined } from "@ant-design/icons-vue";
import "./profile.scss"
</script>

<style scoped></style>