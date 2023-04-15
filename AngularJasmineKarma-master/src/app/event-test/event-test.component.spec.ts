import { DebugElement } from "@angular/core";//to hold element
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";//to hold element using css selector

import { EventTestComponent } from "./event-test.component";

describe("EventTestComponent", () => {
  let component: EventTestComponent;
  let fixture: ComponentFixture<EventTestComponent>;
  let de: DebugElement; //all html holded in de
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventTestComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTestComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement; //hold DOM
  });

  it("addClick button increase the variable by one", function () {
    const btn = de.query(By.css("#btnAddClick")); //hold element(button) by id
    const h1Element = de.query(By.css("h1")); //hold h1 using tag name

    component.ngOnInit();

    fixture.detectChanges();

    btn.triggerEventHandler("click", {});
    fixture.detectChanges();//detect changes after event fired

    expect(component.countClicks).toEqual(1);//to check event return

    expect(h1Element.nativeElement.textContent).toEqual("1");//to check inner text
  });
});
