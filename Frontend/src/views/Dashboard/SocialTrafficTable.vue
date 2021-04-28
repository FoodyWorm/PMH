<template>
  <div></div>
</template>
<script>
  import { BaseProgress } from '@/components';
  import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui'
  export default {
    name: 'social-traffic-table',
    components: {
      BaseProgress,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
    },
    data() {
      return {
        tableData: [
          {
            name: 'Facebook',
            visitors: '1,480',
            progress: 60,
            progressType: 'gradient-danger',
          },
          {
            name: 'LinkedIn',
            visitors: '5,480',
            progress: 70,
            progressType: 'gradient-success',
          },
          {
            name: 'Google',
            visitors: '4,807',
            progress: 80,
            progressType: 'gradient-primary',
          },
          {
            name: 'Instagram',
            visitors: '3,678',
            progress: 75,
            progressType: 'gradient-info',
          },
          {
            name: 'Twitter',
            visitors: '2,645',
            progress: 30,
            progressType: 'gradient-warning',
          }
        ]
      }
    }

  }
</script>
<style>
</style>
