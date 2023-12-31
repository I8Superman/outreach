import { createRouter, createWebHistory } from 'vue-router'
import CallView from '@/views/CallView.vue'
import SettingsView from '@/views/SettingsView.vue'
import ContactsView from '@/views/ContactsView.vue'
import AddContactView from '@/views/AddContactView.vue'
import StatisticsView from '@/views/StatisticsView.vue'
import DetailsView from '@/views/DetailsView.vue'
import EditContactView from '@/views/EditContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CallView
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView
    },
    {
      path: '/contacts/:id',
      name: 'details',
      component: DetailsView,
      props: true,
    },
    {
      path: '/add-contact',
      name: 'add-contact',
      component: AddContactView
    },
    {
      path: '/edit-contact',
      name: 'edit-contact',
      component: EditContactView
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: StatisticsView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
