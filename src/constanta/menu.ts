import { DashboardOutlined, SnippetsOutlined, SettingOutlined, GroupOutlined, TeamOutlined, FolderOpenOutlined, InsertRowRightOutlined } from "@ant-design/icons-vue"
export const menu = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: DashboardOutlined,
        key: 1,
        role: ["director"]
    },
    {
        title: "Stafss",
        path: "/staff",
        icon: SnippetsOutlined,
        key: 2,
        role: ["director", "finance"]
    },
    {
        title: "Students",
        path: "/students",
        icon: TeamOutlined,
        key: 3,
        role: ["admin"]
    },
    {
        title: "Courses",
        path: "/courses",
        icon: FolderOpenOutlined,
        key: 4,
        role: ["admin"]
    },
    {
        title: "Rooms",
        path: "/rooms",
        icon: InsertRowRightOutlined,
        key: 5,
        role: ["admin"]
    }, {
        title: "Groups",
        path: "/groups",
        icon: GroupOutlined,
        key: 6,
        role: ["admin"]
    },
    {
        title: "Settings",
        path: "/settings",
        icon: SettingOutlined,
        key: 7,
        role: ["admin", "director", "finance", "teacher", "student"]
    }
]