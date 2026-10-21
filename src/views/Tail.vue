<template>
  <!-- <h1 class="text-3xl font-bold text-blue-600">Hello Tailwind</h1> -->
  <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
    <!-- <img class="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo" /> -->
    <div>
      <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
      <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
    </div>
  </div>

<div id="select_lang">
  <h1>{{ t('app.title') }}</h1>
  <p>{{ t('order.count', 3) }}</p>
  <p>{{ t('order.created', { date: d(new Date(), 'short') }) }}</p>
  <p>{{ n(total, 'currency') }}</p>

  <select  :value="locale" @change="setLocale(($event.target as HTMLSelectElement).value as AppLocale)">
    <option value="en">English</option>
    <option value="id">Bahasa Indonesia</option>
  </select>
</div>
</template>


<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { setLocale, type AppLocale } from '@/i18n'

const { t, d, n, locale } = useI18n()
const total = 1250000
</script>
