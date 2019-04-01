
import { logOutputChannel } from "./extension";
import { workspace } from "vscode";
import { accessSync } from "original-fs";

const logValueWhiteSpace = 40;


export function timeout(ms: number) 
{
  return new Promise(resolve => setTimeout(resolve, ms));
}


export function pathExists (path: string) 
{
  try {
    accessSync(path);
  } catch (err) {
    return false;
  }
  return true;
}


export async function log(msg: string)
{
  if (workspace.getConfiguration('taskExplorer').get('debug') === true)
	{
    //console.log(msg);
    logOutputChannel.appendLine(msg);
  }
}


export async function logValue(msg: string, value: any)
{
  var logMsg = msg;
  for (var i = msg.length; i < logValueWhiteSpace; i++)
  {
    logMsg += ' ';
  }
  if (value)
  {
    logMsg += ': ';
    logMsg += value.toString();
  }
  if (workspace.getConfiguration('taskExplorer').get('debug') === true)
	{
    //console.log(logMsg);
    logOutputChannel.appendLine(logMsg);
  }
}

