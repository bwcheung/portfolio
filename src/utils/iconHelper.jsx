import { Code, Server, CalendarDays, ArrowDown, Mail, Users, Zap } from "lucide-react";

export const getIcon = (name, size = 24, classNames = "") => {
  let icon = ""
  switch (name) {
    case "Code":
      icon = <Code size={size} className={classNames}/>
      break
    case "Server":
      icon = <Server size={size} className={classNames}/>
      break
    case "Calendar":
      icon = <CalendarDays size={size} className={classNames}/>
      break
    case "ArrowDown":
      icon = <ArrowDown size={size} className={classNames}/>
      break
    case "Mail":
      icon = <Mail size={size} className={classNames}/>
      break
    case "Zap":
      icon = <Zap size={size} className={classNames}/>
      break
    case "Users":
      icon = <Users size={size} className={classNames}/>
      break
  }
  return icon
}