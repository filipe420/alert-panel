'use client';
import { ClipboardText, Pen, Users } from "@phosphor-icons/react/dist/ssr";
import SideMenuItem from "../SideMenuItem/SideMenuItem";
import { useRouter } from "next/navigation";
import { SignOut } from "@phosphor-icons/react";

export default function SideMenu() {
  const router = useRouter()

    return <div className="flex flex-col p-6 border-r border-r-gray-400 gap-3 min-w-60">
        <SideMenuItem title="Check-list de sala" icon={ClipboardText} path="/" />
        <SideMenuItem title="Colaboradores" icon={Users} path="/employees" />
        <SideMenuItem title="Registro de sala" icon={Pen} path="/room-register" />
        <SideMenuItem title="Sair" icon={SignOut} onClick={() => {
          localStorage.clear()
          router.push('/')
          
        }} />
  </div>;
}