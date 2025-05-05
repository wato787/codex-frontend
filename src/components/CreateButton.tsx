import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function CreateButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>新規プロジェクト作成</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>新規プロジェクト作成</DialogTitle>
          <DialogDescription>
            プロジェクトの詳細を入力してください。
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">プロジェクト名</Label>
            <Input id="title" placeholder="プロジェクト名を入力" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">説明</Label>
            <Textarea
              id="description"
              placeholder="プロジェクトの説明を入力"
              rows={4}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="skills">必要なスキル</Label>
            <Input id="skills" placeholder="例: React, TypeScript, Node.js" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="members">募集人数</Label>
            <Input
              id="members"
              type="number"
              min="1"
              placeholder="募集人数を入力"
            />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline">キャンセル</Button>
          <Button>作成</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
