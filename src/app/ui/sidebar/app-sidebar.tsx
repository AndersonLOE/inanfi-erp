'use client';

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail, } from '@/components/ui/sidebar';
import { NavMain } from '@/app/ui/sidebar/nav-main';
import { NavUser } from '@/app/ui/sidebar/nav-user';
import { ModuleSwitcher } from '@/app/ui/sidebar/module-switcher';
import { navigation } from '@/lib/navs';
import { ComponentProps } from 'react';

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <ModuleSwitcher modules={navigation.modules} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navigation.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={navigation.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
