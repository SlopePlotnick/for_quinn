# 快速开始指南

## 🚀 立即使用 Firebase

### 步骤 1：创建 Firebase 项目（5分钟）

1. 访问：**https://console.firebase.google.com/**
2. 点击"添加项目"
3. 项目名称：`for-quinn`
4. 关闭 Google Analytics
5. 点击"创建项目"

### 步骤 2：添加 Web 应用

1. 点击 `</>` 图标（Web）
2. 应用昵称：`for-quinn-web`
3. **不要勾选** Firebase Hosting
4. 点击"注册应用"

### 步骤 3：复制配置信息

你会看到这样的代码：

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123...",
  appId: "1:123..."
};
```

**复制这段配置！**

### 步骤 4：修改配置文件

打开 `firebase-config.js`，替换配置信息：

```javascript
const firebaseConfig = {
    apiKey: "粘贴你的 apiKey",
    authDomain: "粘贴你的 authDomain",
    projectId: "粘贴你的 projectId",
    storageBucket: "粘贴你的 storageBucket",
    messagingSenderId: "粘贴你的 messagingSenderId",
    appId: "粘贴你的 appId"
};
```

### 步骤 5：启用 Firestore

1. 左侧菜单：Firestore Database
2. 点击"创建数据库"
3. 选择"以测试模式启动"
4. 地区：`asia-east1` (台湾)
5. 点击"启用"

### 步骤 6：设置安全规则

在 Firestore → 规则：

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /periods/{document=**} {
      allow read, write: if true;
    }
    match /diary/{document=**} {
      allow read, write: if true;
    }
  }
}
```

点击"发布"。

### 步骤 7：部署到 GitHub

```bash
git add .
git commit -m "配置 Firebase"
git push
```

### 步骤 8：测试

访问：**https://slopeplotnick.github.io/for_quinn/**

添加一条记录，刷新页面，数据应该还在！

---

## ✅ 完成！

现在你的数据会：
- ✅ 自动保存到云端
- ✅ 多设备实时同步
- ✅ 永久存储，不会丢失

---

## 🔍 如何确认成功？

1. 按 `F12` 打开控制台
2. 应该看到：`Firebase 已成功初始化！`
3. 添加一条记录
4. 在 Firebase 控制台的 Firestore 中查看数据

---

## ⚠️ 重要提示

如果遇到问题：

1. 检查 `firebase-config.js` 配置是否正确
2. 确认 Firestore 数据库已启用
3. 确认安全规则已设置并发布
4. 查看浏览器控制台的错误信息

---

## 📚 更多信息

- 详细指南：`FIREBASE_SETUP.md`
- 功能说明：`README_FIREBASE.md`

---

**就这么简单！祝你和燕燕幸福！💕**
