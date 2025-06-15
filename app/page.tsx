"use client"; // <-- This is the fix

import * as React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Toaster, toast } from 'sonner'


export default function ComponentCatalog() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <>
    <Toaster />
    <div className="container mx-auto p-10 space-y-12">
      <header className="text-center space-y-2">
        <h1 className="text-5xl font-bold tracking-tighter">Component Catalog</h1>
        <p className="text-muted-foreground text-xl">
          A visual inventory of all UI components in the Founder's Playbook Backbone.
        </p>
      </header>

      <Separator />

      {/* Section: Buttons & Inputs */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight">Forms & Inputs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader><CardTitle>Button</CardTitle></CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </CardContent>
          </Card>
           <Card>
            <CardHeader><CardTitle>Sonner (Toast)</CardTitle></CardHeader>
            <CardContent>
              <Button onClick={() => toast.success("Your profile has been updated!")}>Show Toast</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Input & Label</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="email@example.com" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Textarea</CardTitle></CardHeader>
            <CardContent><Textarea placeholder="Type your message here." /></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Checkbox</CardTitle></CardHeader>
            <CardContent className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Switch</CardTitle></CardHeader>
            <CardContent className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Select</CardTitle></CardHeader>
            <CardContent>
              <Select>
                <SelectTrigger><SelectValue placeholder="Select a fruit" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Slider</CardTitle></CardHeader>
            <CardContent>
              <Slider defaultValue={[50]} max={100} step={1} />
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Section: Layout & Structure */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight">Layout & Structure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader><CardTitle>Card</CardTitle><CardDescription>This is a card component.</CardDescription></CardHeader>
            <CardContent><p>Card content goes here.</p></CardContent>
            <CardFooter><Button size="sm">View Details</Button></CardFooter>
          </Card>
          <Card>
            <CardHeader><CardTitle>Accordion</CardTitle></CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Tabs</CardTitle></CardHeader>
            <CardContent>
              <Tabs defaultValue="account">
                <TabsList><TabsTrigger value="account">Account</TabsTrigger><TabsTrigger value="password">Password</TabsTrigger></TabsList>
                <TabsContent value="account">Account settings.</TabsContent>
                <TabsContent value="password">Password settings.</TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Dialog</CardTitle></CardHeader>
            <CardContent>
              <Dialog>
                <DialogTrigger asChild><Button>Open Dialog</Button></DialogTrigger>
                <DialogContent>
                  <DialogHeader><DialogTitle>Dialog Title</DialogTitle><DialogDescription>Dialog description.</DialogDescription></DialogHeader>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Separator</CardTitle></CardHeader>
            <CardContent className="text-center space-y-2">
              <p>Content A</p>
              <Separator />
              <p>Content B</p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader><CardTitle>Aspect Ratio</CardTitle></CardHeader>
            <CardContent>
               <AspectRatio ratio={16 / 9} className="bg-muted">
                 <div className="flex items-center justify-center h-full">16:9</div>
               </AspectRatio>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Section: Data Display */}
       <section className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight">Data Display</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <Card>
            <CardHeader><CardTitle>Avatar</CardTitle></CardHeader>
            <CardContent className="flex gap-4">
              <Avatar><AvatarImage src="https://github.com/shadcn.png" /><AvatarFallback>CN</AvatarFallback></Avatar>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Badge</CardTitle></CardHeader>
            <CardContent className="flex gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Tooltip</CardTitle></CardHeader>
            <CardContent>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild><Button variant="outline">Hover Me</Button></TooltipTrigger>
                  <TooltipContent><p>Tooltip content!</p></TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardContent>
          </Card>
          <Card className="col-span-1 md:col-span-2 lg:col-span-3">
             <CardHeader><CardTitle>Table</CardTitle></CardHeader>
             <CardContent>
                <Table>
                  <TableCaption>A list of recent invoices.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>INV001</TableCell>
                      <TableCell>Paid</TableCell>
                      <TableCell>Credit Card</TableCell>
                      <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
             </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Calendar</CardTitle></CardHeader>
            <CardContent className="flex justify-center">
              <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
            </CardContent>
          </Card>
        </div>
       </section>
      
      <Separator />

      {/* Section: Feedback & States */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight">Feedback & States</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader><CardTitle>Alert</CardTitle></CardHeader>
            <CardContent>
              <Alert>
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>You can add components to your app using the cli.</AlertDescription>
              </Alert>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Alert Dialog</CardTitle></CardHeader>
            <CardContent>
              <AlertDialog>
                <AlertDialogTrigger asChild><Button variant="destructive">Delete Account</Button></AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader><AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle><AlertDialogDescription>This action cannot be undone.</AlertDialogDescription></AlertDialogHeader>
                  <AlertDialogFooter><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction>Continue</AlertDialogAction></AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Skeleton</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Progress</CardTitle></CardHeader>
            <CardContent>
              <Progress value={66} />
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
    </>
  )
}
