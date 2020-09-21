import locale from 'element-ui/lib/locale/lang/en'
import {
  Message,
  Select,
  Option,
  Tabs,
  TabPane,
  Popover,
  Scrollbar,
  Tree,
  Checkbox,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Form,
  FormItem,
  Input,
  Button,
  Row,
  Col,
  DatePicker,
  Table,
  TableColumn,
  Pagination,
  Steps,
  Step,
  Loading,
  Progress,
  Breadcrumb,
  BreadcrumbItem
} from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.component(Message.name, Message)
    Vue.use(Scrollbar, { locale })
    Vue.use(Select, { locale })
    Vue.use(Option, { locale })
    Vue.use(Tabs, { locale })
    Vue.use(TabPane, { locale })
    Vue.use(Popover, { locale })
    Vue.use(Tree, { locale })
    Vue.use(Checkbox, { locale })
    Vue.use(Menu, { locale })
    Vue.use(Submenu, { locale })
    Vue.use(MenuItemGroup, { locale })
    Vue.use(MenuItem, { locale })
    Vue.use(Form, { locale })
    Vue.use(FormItem, { locale })
    Vue.use(Input, { locale })
    Vue.use(Button, { locale })
    Vue.use(Col, { locale })
    Vue.use(Row, { locale })
    Vue.use(DatePicker, { locale })
    Vue.use(Table, { locale })
    Vue.use(TableColumn, { locale })
    Vue.use(Pagination, { locale })
    Vue.use(Steps, { locale })
    Vue.use(Progress, { locale })
    Vue.use(Step, { locale })
    Vue.use(Breadcrumb, { locale })
    Vue.use(BreadcrumbItem, { locale })
    Vue.prototype.$message = Message
    Vue.prototype.$loading = Loading
  }
}
export default element
