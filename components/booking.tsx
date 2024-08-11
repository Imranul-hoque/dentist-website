"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { useState } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

export const Booking = () => {

    const [date, setDate] = useState<Date>();

  return (
    <div className="w-full h-full md:h-[70vh] bg-[#E3F2E7]">
      <div className="grid h-full grid-cols-1 md:grid-cols-2 gap-y-4">
        <div className="w-full px-10 h-full flex flex-col items-start justify-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#013A65]">
            Book your Visit
          </h2>
          <p className="text-sm pt-3 font-semibold text-muted-foreground !text-start">
            Bright Smiles, Healthy Lives!
          </p>
          <form className="w-full flex flex-col space-y-2 pt-3">
            <div className="flex flex-col md:flex-row gap-3">
              <Input placeholder="Name*" type="text" />
              <Input placeholder="Phone*" type="text" />
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Dentist*" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Dentist</SelectLabel>
                    <SelectItem value="karim">Karim</SelectItem>
                    <SelectItem value="rahim">Rahim</SelectItem>
                    <SelectItem value="jabbar">Jabbar</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service*" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Service</SelectLabel>
                    <SelectItem value="Teeth Cleaning">
                      Teeth Cleaning
                    </SelectItem>
                    <SelectItem value="Dental Implants">
                      Dental Implants
                    </SelectItem>
                    <SelectItem value="Teeth Whitening">
                      Teeth Whitening
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="w-full">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="w-full">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a time*" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Time</SelectLabel>
                      <SelectItem value="10:30 AM">10:30 AM</SelectItem>
                      <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                      <SelectItem value="4:15 PM">4:15 PM</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
          <div className="pt-3">
            <Button className="bg-[#013A65] px-8 py-6 text-white rounded-tl-2xl rounded-br-2xl hover:rounded-br-none hover:rounded-tl-none transition-all duration-500">
              Book Now
            </Button>
          </div>
        </div>
        <div className="bg-[url('/patient.jpg')] h-[60vh] md:h-full md:w-full bg-cover bg-center bg-no-repeat" />
      </div>
    </div>
  );
};
