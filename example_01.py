def sink(x):
    print(f"hacked: {x}")
def foo(x):
    sink(x)
def bar():
    y = src()
    foo(y)
